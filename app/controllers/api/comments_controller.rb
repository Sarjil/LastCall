class Api::CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422 
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment && @comment.update_attributes(comment_params)
        render :show
        elsif !@comment
        render json: ["Comment not found."], status: 400
        else
        render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment && @comment.destroy
            render :show
        else
            render json: ["Comment not found"], status: 422
        end
    end
    

    private
    def comment_params
        params.require(:comment).permit(:body, :checkin_id, :author_id)
    end

end