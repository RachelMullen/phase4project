class WoofSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :woof_content
  has_many :comments
end
