import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from 'src/shared/fileName.helper';
import { NftPrepareDeployDto } from './dto/nft-prepare-deploy';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/temp',
        filename: Helper.customFileName,
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { nft: string },
  ) {
    const nft: NftPrepareDeployDto = JSON.parse(body.nft);

    return this.nftService.prepareDeploy(nft, file);
  }
}
