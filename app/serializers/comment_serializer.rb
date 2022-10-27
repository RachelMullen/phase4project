class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :woof_id, :comment
  belongs_to :user
  belongs_to :woof
end
