# == Schema Information
#
# Table name: checkins
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  beer_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Checkin < ApplicationRecord
    validates :author_id, :beer_id, presence: true 

    belongs_to :beer
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    def self.order_by
        Checkin.order('created_at DESC').all
    end
    
end
