class Api::TrucksController < ApplicationController

  def create
    @truck = Truck.new(truck_params)
    if @truck.save
      @trucks = Truck.all
      render 'api/trucks/index'
    else
       render json: @truck.errors.full_messages, status: 422
    end
  end

  def index
    @trucks = Truck.all
  end

  private
  def truck_params 
    params.require(:truck).permit(:name, :start_time, :end_time)
  end
end