import { Module } from '@nestjs/common';
import { NftService } from './nft.service';
import { NftController } from './nft.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [NftService],
  controllers: [NftController],
})
export class NftModule {}
