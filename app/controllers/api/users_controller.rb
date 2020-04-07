class Api::UsersController < ApplicationController
    def show
        @user = User.find(parms[:id])
        render :show
    end


    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end 

    private 
    def user_params
        params.require(:user).permit(:username,:password, :email)
    end
    
end