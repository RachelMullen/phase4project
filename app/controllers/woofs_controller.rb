class WoofsController < ApplicationController

## SHOW ALL WOOFS
def index
    woofs = Woof.all
    render json: 
end

## CREATE NEW WOOF
def create
    woof = @current_user.woofs.create!(woof_params)
    render json: woof, status: :created
end

## SHOW WOOFS ASSOCIATED WITH USER
def show
        woof = Woof.find(params[:id])
        render json: woof
    end

## UPDATE CURRENT WOOF OWNED BY USER
def update

end

##DELETE CURRENT WOOF OWNED BY USER
def destroy
    woof = Woof.find(params[:id])
    woof.destroy
    head :no_content
end

private
def woof_params
    params.permit(:woof_content, :image_url)
    end
end



