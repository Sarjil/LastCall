class Api::CheckInsController < ApplicationController

    def index
       @checkins = CheckIn.all 
       render :index
    end

    def show
        @checkin = CheckIn.find(params[:id])
        render :show
    end

    def create
        #create checkins goes here
    end

    def update
        #update checkins goes here
    end

    def destroy
        #destroy checkins goes here
    end 


end

