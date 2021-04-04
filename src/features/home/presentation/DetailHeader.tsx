import React from "react";
import { View, ImageBackground } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Title, Subheading } from "react-native-paper";
import { DetailHeaderStyle } from "./styles";

interface IProps {
  title: string;
  voteAverage: number;
  videos: object[];
  backdropUrl: string;
}

const DetailHeader: React.FC<IProps> = ({
  title,
  voteAverage,
  videos,
  backdropUrl,
}) => {
  const hasTrailler = Boolean(
    Array.isArray(videos?.results) && videos?.results.length
  );

  return (
    <>
      {hasTrailler ? (
        <View>
          <YoutubePlayer height={250} videoId={videos?.results[0]?.key} />
        </View>
      ) : (
        <ImageBackground
          source={{ uri: backdropUrl }}
          style={DetailHeaderStyle.imageBackground}
        />
      )}
      <View style={DetailHeaderStyle.contentContainer}>
        <Title style={DetailHeaderStyle.title}>{title}</Title>
        {Boolean(voteAverage) && (
          <View style={DetailHeaderStyle.subTitleContainer}>
            <MaterialCommunityIcons
              name="thumbs-up-down"
              size={20}
              color="white"
            />
            <Subheading style={DetailHeaderStyle.subTitleText}>
              {`${voteAverage * 10}%`}
            </Subheading>
          </View>
        )}
      </View>
    </>
  );
};

export default DetailHeader;
