import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from "fs";
import { join } from "path";
import { NftPrepareDeployDto } from "./dto/nft-prepare-deploy";
import ipfsUpload from "./lib/ipfsUpload";

@Injectable()
export class NftService {
  // upload on ipfs
  async ipfs(path: string) {
    try {
      const ipfsResult = await ipfsUpload(path);
      return `https://ipfs.infura.io/ipfs/${ipfsResult[0]?.hash}`;
    } catch (error) {
      throw new HttpException(
        `Error with upload on ipfs`,
        HttpStatus.BAD_REQUEST
      );
    }
  }

  // create json metada for opensea
  metadata(
    directory: string,
    filepath: string,
    fileContent: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      // creater folder
      fs.mkdir(directory, { recursive: true }, (err) => {
        if (err) {
          reject(err);
        }
        // create file
        fs.writeFile(filepath, fileContent, (err) => {
          if (err) {
            reject(err);
          }
          resolve(filepath);
        });
      });
    });
  }
  // prepare for contract
  async prepareDeploy(nft: NftPrepareDeployDto, image: Express.Multer.File) {
    if (
      !nft.account ||
      !nft.amount ||
      !nft.description ||
      !nft.name ||
      !nft.tokenId
    ) {
      throw new HttpException(`Checkout args!`, HttpStatus.BAD_REQUEST);
    }
    const ipfsResult = await this.ipfs(image.path);

    const openseaJson = {
      description: nft.description,
      image: ipfsResult,
      name: nft.name,
    };

    const directory = `${join(__dirname, "..", "..", "public")}/${nft.account}`;
    const filename = `${nft.tokenId}.json`;
    const filepath = `${directory}/${filename}`;

    const createdFile = await this.metadata(
      directory,
      filepath,
      JSON.stringify(openseaJson)
    );
    const uploadedJson = await this.ipfs(createdFile);

    const nff = {
      tokenId: nft.tokenId,
      amount: nft.amount,
      uri: uploadedJson,
      openseaJson,
    };
    return nff;
  }
}
