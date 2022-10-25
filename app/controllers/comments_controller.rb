class CommentsController < ApplicationController

## SHOW ALL COMMENTS
def index
    render json: Comment.all
end

## CREATE NEW COMMENT
def create
    comment = @current_user.Comment.create!(comment_params)
    render json: comment, status: :created
end

## SHOW CURRENT COMMENT
def show
    comment = Comment.find(params[:id])
    render json: comment
end

## UPDATE CURRENT COMMENT
def update

end

##DELETE CURRENT COMMENT
def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    head :no_content
end

    private
    
def comment_params
        params.permit(:comment, :woof_id, :user_id)
    end
end
