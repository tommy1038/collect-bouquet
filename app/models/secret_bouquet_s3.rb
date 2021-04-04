class SecretBouquetS3 < S3
  def posts(size = 10, offset = 0)

    list = client.list_objects(bucket: bucket_name, prefix: 'result/',
                               max_keys: (size.to_i + offset.to_i))

    list.contents.slice!(0, offset.to_i).shift(offset.to_i).map do |item|
      json = client.get_object(bucket: bucket_name, key: item.key)
      json = JSON.parse(json.body.read)
      image = resource.bucket(bucket_name).object(json['image'])
      image_url = image.presigned_url(:get)
      name = json['name']
      score = json['score']
      {
        key: item.key,
        image: image_url,
        name: name,
        score: score
      }
    end
  end
end
