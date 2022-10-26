class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

## SHOW ALL USERS
def index
    render json:@current_user.woofs
end

## CREATE NEW USER
def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

## SHOW CURRENT USER
def show
    render json: @current_user
end

def user_woofs
    render json: @current_user.woofs
end

def show_user id
    user = User.find(params[:id])
    render json: user
end
## UPDATE CURRENT USER
def update
    @current_user.update(user_params)
    render json: @current_user
end

##DELETE CURRENT USER
def destroy
    @current_user.destroy
    head :no_content
end

    private
    
def user_params
        params.permit(:username, :password, :password_confirmation, :name, :username, :breed, :email, :bio, :image_url)
    end
end
