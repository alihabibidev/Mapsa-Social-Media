import { NextFunction, Request, Response } from "express";
import { CreateUserDto, UpdateUserDto } from "@dtos/user.dto";
import { IUser } from "@interfaces/user.interface";
import PostService from "@services/post.service";
import { Controller, Get, Middleware, Post, Delete, Put } from "@common";
import validationMiddleware from "@/middlewares/validation.middleware";

@Controller("/users")
@Middleware((req, res, next) => {
  console.log("hello class");
  next();
})
class PostController {
  private postService = new PostService();

  @Get("/")
  public async getPosts(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error);
    }
  }
 
  
  @Get("/:id")
  public async getPostById(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error);
    }
  }

  @Post("/")
  public async createPost(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error);
    }
  }

  @Put("/:id")
  public async updatePost(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error);
    }
  }

  @Delete("/:id")
  public async deletePost(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error);
    }
  }
}

export default PostController;
