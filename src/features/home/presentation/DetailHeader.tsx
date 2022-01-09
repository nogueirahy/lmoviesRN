import React from "react";
import { View, ImageBackground } from "react-native";
import WebView from "react-native-webview";
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
  const hasTrailer = Boolean(
    Array.isArray(videos?.results) && videos?.results.length
  );

  return (
    <>
      {hasTrailer ? (
        <View>
          <WebView
            originWhitelist={["*"]}
            source={{
              uri: `http://www.youtube.com/embed/${videos?.results[0]?.key}`,
            }}
            style={{
              width: "100%",
              height: 250,
            }}
          />
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
