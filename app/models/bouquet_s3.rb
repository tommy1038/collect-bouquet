class BouquetS3 < S3
  def posts(size = 10, offset = 0)
    list = client.list_objects(bucket: bucket_name, prefix: 'images/', max_keys: (size.to_i + offset.to_i))
    list.contents.slice!(0, offset.to_i).shift(offset.to_i).map do |item|
      image = resource.bucket(bucket_name).object(item['key'])
      image_url = image.presigned_url(:get)
      {
        key: item['key'],
        image: image_url
      }
    end
  end
end
