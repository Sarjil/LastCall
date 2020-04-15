class Api::CheckinsController < ApplicationController

    def index
       @checkins = Checkin.all 
       render :index
    end

    def show
        @checkin = Checkin.find(params[:id])
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

