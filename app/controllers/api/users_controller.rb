class Api::UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end 
    
    def create
        @user = User.new(user_params)

        if @user.save 
            login!(@user)
            render json: "Successfully Created User"
        else
            flash.now[:errors] = @user.errors.full_messages status: 404
            render :new
        end 


    end 

    private 
    def user_params
        params.require(:user).permit(:username,:password)
    end
    
end