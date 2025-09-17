import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link
      href={{ pathname: "/movies/[id]", params: { id: String(id) } }}
      asChild
    >
      <TouchableOpacity className="w-[30%]">
        <Image
          className="w-full h-52 rounded-lg"
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          resizeMode="cover"
        />

        <Text className="text-sm font-bold text-white mt-2">{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
