# == Schema Information
#
# Table name: breweries
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text             not null
#
class Brewery < ApplicationRecord
    validates :name, presence: true
    validates :location, presence: true 

    has_many :beers
    has_one_attached :photo 
    after_initialize :ensure_default_photo

  def ensure_default_photo
    self.photo.attach(io: File.open('app/assets/images/default_brewery.png'), filename: 'default_brewery.png') unless self.photo.attached?
  end

end
