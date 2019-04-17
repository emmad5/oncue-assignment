# == Schema Information
#
# Table name: trucks
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  start_time :time             not null
#  end_time   :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Truck < ApplicationRecord
  validates :name, :start_time, :end_time, presence: true
end
