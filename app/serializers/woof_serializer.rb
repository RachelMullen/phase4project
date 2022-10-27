class WoofSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :woof_content
  has_many :comments
  has_many :users
end
