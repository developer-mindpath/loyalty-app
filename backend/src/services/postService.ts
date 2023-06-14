import { UpdateResult } from "typeorm";
import InsertPostRequestDTO from "../dto/post/insertPostRequestDto";
import { PostModel } from "../database/models/post";
import PostRepository from "../repository/postRepository";
import { GetPostResponse } from "../types/response/post/getPostResponse";
import UpdatePostRequestDTO from "../dto/post/updatePostRequestDto";

export default class PostService {
  private _postRepository: PostRepository;
  constructor() {
    this._postRepository = new PostRepository();
  }

  public async insertPost(
    insertPostRequestDTO: InsertPostRequestDTO
  ): Promise<PostModel> {
    return await this._postRepository.insertPost(insertPostRequestDTO);
  }

  public async getPosts(userId: number): Promise<Array<GetPostResponse>> {
    return await this._postRepository.getPosts(userId);
  }

  public async getPost(postId: number): Promise<GetPostResponse> {
    const postResponse = await this._postRepository.getPost(postId);
    return postResponse ? postResponse : ({} as GetPostResponse);
  }

  public async updatePost(
    updatePostRequestDTO: UpdatePostRequestDTO
  ): Promise<UpdateResult> {
    return await this._postRepository.updatePost(updatePostRequestDTO);
  }
}
