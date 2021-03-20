class BouquetS3 < S3
  def posts
    client.list_objects(bucket: bucket_name, prefix: 'images/', max_keys: 5).contents.map do |item|
      image = resource.bucket(bucket_name).object(item['key'])
      image_url = image.presigned_url(:get)
      {
        image: image_url
      }
    end
  end
end
