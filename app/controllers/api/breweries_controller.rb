class Api::BreweriesController < ApplicationController

    def index
        @breweries = Brewery.all 
        render :index
    end

    def show
        @brewery = Brewery.find(params[:id])
        render :show
    end

    def create
        @brewery = Brewery.new(brewery_params)
        if @brewery.save
            render :show
        else
            render json: @brewery.errors_full_messages, status: 422
        end 
    end

    def update
        @brewery = Brewery.find(params[:id])
        if @brewery 
            render :show
        else
            render json: ['Cannot find Brewery'], status: 404
        end
    end
    

    private

    def brewery_params
        params.require(:brewery).permit(:name,:location,:description)
    end

end