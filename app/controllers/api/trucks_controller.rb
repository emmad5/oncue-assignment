class Api::TrucksController < ApplicationController

  def create
    @truck = Truck.new(truck_params)
  end

  def index
    @trucks = Truck.all
  end

  private
  def truck_params 
    params.require(:job).permit(:name, :start_time, :end_time)
  end
end