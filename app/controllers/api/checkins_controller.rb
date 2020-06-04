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
    @checkin = Checkin.new(checkin_params)
    if @checkin.save
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

    def update
        @checkin = Checkin.find(params[:id])
        if @checkin && @checkin.update_attributes(checkin_params)
            render :show
        elsif !@checkin
            render json: ['Could not find checkin'], status: 400
        else
            render json: @checkin.errors.full_messages, status: 401
        end
    end

    def destroy
        @checkin = Checkin.find(params[:id])
        if @checkin && @checkin.destroy
          render :show
        else
         render json: ["There is no checkin to delete."], status: 404
        end
    end

private

  def checkin_params
    params.require(:checkin).permit(:author_id, :body, :beer_id)
  end


end

