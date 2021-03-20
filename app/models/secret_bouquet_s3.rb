class SecretBouquetS3 < S3
  def exist_s3_check
    client.list_buckets.buckets.map(&:name)
  end

  def posts
    bucket_name = 'collect-bouquet-bucket'

    client.list_objects(bucket: bucket_name, prefix: 'result/', max_keys: 5).contents.map do |item|
      json = client.get_object(bucket: bucket_name, key: item.key)
      json = JSON.parse(json.body.read)
      image = resource.bucket(bucket_name).object(json['image'])
      image_url = image.presigned_url(:get)
      name = json['name']
      score = json['score']
      {
        image: image_url,
        name: name,
        score: score
      }
    end
  end
end
