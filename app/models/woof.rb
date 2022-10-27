class Woof < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments

        #need to add dependent destroy

    # validates :woof_content, presence: true
end
