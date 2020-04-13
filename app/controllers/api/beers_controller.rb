class Api::BeersController < ApplicationController 

    def index
        @beers = Beer.all 
        render :index
    end

    def show
        @beer = Beer.find(params[:id])
        render :show
    end

    def create
        @beer = Beer.new(beer_params)
        if @beer.save
            render :show
        else
            render json: @beer.errors.full_messages, status: 422
            # debugger
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
        params.require(:beer).permit(:name, :style, :abv, :description, :brewery_id)
    end

end
