class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :woof_id, :comment
end
