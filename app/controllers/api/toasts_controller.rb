class Api::ToastsController < ApplicationController
  def index 
    @toasts = Toast.all
    render :index
  end

  def create 
    @toast = Toast.new(toast_params)
    if @toast.save
      render :show
    else
      render json: @toast.errors.full_messages, status: 422
    end
  end

  def destroy
    @toast = Toast.find(params[:id])
    if @toast && @toast.destroy
      render :show
    else
      render json: ["Could not find toast."], status: 404
    end
  end

  private

  def toast_params
    params.require(:toast).permit(:user_id, :checkin_id)
  end
end
