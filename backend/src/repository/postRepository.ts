import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { PostModel } from "../database/models/post";
import InsertPostRequestDTO from "../dto/post/insertPostRequestDto";
import { GetPostResponse } from "../types/response/post/getPostResponse";
import UpdatePostRequestDTO from "../dto/post/updatePostRequestDto";

export default class PostRepository {
  private _postModel: Repository<PostModel>;
  constructor() {
    this._postModel = AppDataSource.getRepository(PostModel);
  }

  public async insertPost(
    insertPostRequestDTO: InsertPostRequestDTO
  ): Promise<PostModel> {
    return await this._postModel.save(insertPostRequestDTO);
  }

  public async getPosts(userId: number): Promise<Array<GetPostResponse>> {
    return await this._postModel.find({
      where: { user_id: userId },
    });
  }

  public async getPost(postId: number): Promise<GetPostResponse | null> {
    return await this._postModel.findOne({
      where: { id: postId },
    });
  }

  public async updatePost(
    updatePostRequestDTO: UpdatePostRequestDTO
  ): Promise<UpdateResult> {
    const id = updatePostRequestDTO.postId;
    const data = lodash.omit(updatePostRequestDTO, ["postId"]);
    return await this._postModel.update({ id }, data);
  }
}
