class Api:SessionsController < ApplicationController 


    def destroy
        if logged_in?
            logout!
            render json: {} 
        else
            render json: ["There Is No Current User"], status:404 
        end
    end

end