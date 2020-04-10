class Api::BeersController < ApplicationController 

    def index
        @beers = Beer.all 
        render :index
    end

    def show
        @beer = Beer.find(params[:id])
        return :show
    end

    def create
        @beer = Beer.new(beer_params)
        if @beer.save
            render :show
        else
            render json: @beer.errors.full_messages, status: 422
        end
    end 

    def update
        @beer = Beer.find(params[:id])
        if @beer
            render :show
        else
            render json: ['Cannot Find Beer'], status: 404
        end
    end

    private

    def beer_params
        params.require(:beer).permit(:name, :style, :abv, :description, :photo, :brewery_id)
    end

end
