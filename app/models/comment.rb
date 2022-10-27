class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :woof

    # validates :comment, presence: true
end
