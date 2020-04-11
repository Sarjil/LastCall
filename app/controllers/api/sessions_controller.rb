class Api::SessionsController < ApplicationController 

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render :show
        else
            render json: ['Your username and/or password is incorrect'], status: 401
        end
  end

    def destroy
        if logged_in?
            logout!
            render json: {} 
        else
            render json: ["There Is No Current User"], status:404 
        end
    end

end