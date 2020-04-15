# == Schema Information
#
# Table name: beers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  brewery_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text             not null
#  abv         :string           not null
#  style       :string           not null
#
class Beer < ApplicationRecord
    validates :name, :abv, :style, :description, presence: true 

    belongs_to :brewery
    has_one_attached :photo 
    after_initialize :ensure_default_photo

    has_many :checkins
    has_many :checkin_authors,
    through: :checkins,
    source: :author 

  def ensure_default_photo
    self.photo.attach(io: File.open('app/assets/images/favicon.png'), filename: 'favicon.png', content_type: 'image/png') unless self.photo.attached?
  end

end
