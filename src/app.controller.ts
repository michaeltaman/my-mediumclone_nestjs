import { Controller, Get } from '@nestjs/common';
import { TagEntity } from '@app/tag/tag.entity';
import { TagService } from '@app/tag/tag.service';

@Controller('tags')
export class AppController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<TagEntity[]> {
    return await this.tagService.findAll();
  }
}
