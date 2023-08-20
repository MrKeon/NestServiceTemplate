import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto } from '../bookmark/dto/create-bookmark.dto';
import { PrismaService } from '../prisma/prisma.service';
import { EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService){}

    getBookmarks(userId: number){
        return this.prisma.bookmark.findMany({
            where: {
                userId,
            }
        })
    }

    getBookmarkById(bookmarkId: number){
        return this.prisma.bookmark.findFirst({
            where: {
                id: bookmarkId
            }
        });
    }

    async createBookmark(userId: number, dto: CreateBookmarkDto){
        const bookmark = await this.prisma.bookmark.create({
            data: {
                userId,
                ...dto
            }
        });

        return bookmark;
    }

    editBookmarkById(userId: number, bookmarkId: number, dto: EditBookmarkDto){}

    deleteBookmarkById(userId: number, bookmarkId: number){}
}
