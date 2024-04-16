import Form, {
  abilitiesAndFlavor,
  artistAndDisclaimer,
  ExpansionAndRatiry,
  manaCost,
} from "./components/organisms/Form/Form";

import { fileToBase64 } from "./utils/Image";
import { useSelector, useDispatch } from "react-redux";

import { changeImage, changeName } from "./state/naming/namingSlice";
import {
  changeSubtypes,
  changeSupertype,
  changeType,
} from "./state/typing/typingSlice";

import { Naming } from "./components/organisms/Form";
import CardSizeContextProvider, {
  initialCardSizeContext,
} from "./utils/cardSizeContext";
import { ClassicCardTemplate } from "./cardComponents/templates/Classic/ClassicCardTemplate";
import { CardData, CardSuperType, CardType, TabData } from "./ts/types";
import { Tabs } from "./components/molecules/Tabs/Tabs";
import {
  ShieldCheckIcon,
  SparklesIcon,
  SquaresPlusIcon,
  StarIcon,
  HandRaisedIcon,
  RectangleStackIcon,
} from "@heroicons/react/20/solid";
import Button from "./components/atoms/Button/Button";
import { Buffer } from "buffer";
import Sets from "./assets/json/Sets.json";
import CardTyping from "./assets/json/CardTypes2.json";

import { getSetsOptionList } from "./utils/getSetOptionList";
import React from "react";
import { RootState } from "./state/store";
import { title } from "process";
import { Typing } from "./components/organisms/Form/Typing";
const card: CardData = {
  imageSource:
    "https://www.artofmtg.com/wp-content/uploads/2020/01/Yorvo-Lord-of-Garenbrig-Throne-of-Eldraine-MtG-Art-1024x758.jpg",
  title: "El Jeringas Lokote",
  text: "El jeringas lokote tiene toque mortal mietras sea de noche",
  flavor: "Ya se la sabe morro",
  artist: "Bob Ross",
  collection: "khm",
  disclaimer: "The prismatic Bridge 2024",
  manaCost: ["B", "R", "2"],
  rarity: "Mythic",
  colorIdentity: ["B", "R"],
  superType: "Legendary",
  type: "Artifact",
  subtypes: "Zombie Berzerker",
  creatureData: {
    power: 3,
    toughness: 4,
  },
};

const rarities = [
  {
    id: "common",
    name: "Common",
    render: <div>Common</div>,
  },
];

const NamingUI = () => {
  const naming = useSelector((state: RootState) => state.naming);
  const dispatch = useDispatch();

  async function handleImageUpload(image: File) {
    console.log("image", image);
    const arrayBuffer = await image.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");
    const imgSource = `data:${image.type};base64,${base64Image}`;
    console.log("imgSource", base64Image);
    dispatch(
      changeImage({ data: imgSource, type: image.type, name: image.name })
    );
  }

  return (
    <Naming
      name={naming.name}
      image={naming.image}
      onNameChange={(name) => dispatch(changeName(name))}
      onImageChange={handleImageUpload}
    />
  );
};

const TypingUI = () => {
  const typing = useSelector((state: RootState) => state.typing);
  const dispatch = useDispatch();
  return (
    <Typing
      onChangeSubtypes={(subtypes) => dispatch(changeSubtypes(subtypes))}
      onChangeSupertype={(supertype) => dispatch(changeSupertype(supertype))}
      onChangeType={(type) => dispatch(changeType(type))}
      cardSupertype={typing.superType}
      cardType={typing.type}
      cardSubtypes={typing.subtypes}
      cardSupertypeOptions={CardTyping.cardSuperTypes as CardSuperType[]}
      cardTypeOptions={CardTyping.cardTypes as CardType[]}
    />
  );
};

const tabsData: TabData[] = [
  {
    title: "Naming",
    tabUI: (
      <div className="flex flex-col items-center">
        <ShieldCheckIcon width={22} alignmentBaseline="central" />
        <div>Naming</div>
      </div>
    ),
    panelUI: <NamingUI />,
  },
  {
    title: "Mana & Colors",
    tabUI: (
      <div className="flex flex-col items-center">
        <SparklesIcon width={22} alignmentBaseline="central" />
        <div>Color</div>
      </div>
    ),
    panelUI: manaCost,
  },
  {
    title: "Types",
    tabUI: (
      <div className="flex flex-col items-center">
        <SquaresPlusIcon width={22} alignmentBaseline="central" />
        <div>Types</div>
      </div>
    ),
    panelUI: <TypingUI />,
  },
  {
    title: "Expansion",
    tabUI: (
      <div className="flex flex-col items-center">
        <StarIcon width={22} alignmentBaseline="central" />
        <div>Expansion</div>
      </div>
    ),
    panelUI: (
      <ExpansionAndRatiry sets={getSetsOptionList()} rarities={rarities} />
    ),
  },
  {
    title: "Abilities",
    tabUI: (
      <div className="flex flex-col items-center">
        <HandRaisedIcon width={22} alignmentBaseline="central" />
        <div>Abilities</div>
      </div>
    ),
    panelUI: abilitiesAndFlavor,
  },
  {
    title: "Artist and Disclamer",
    tabUI: (
      <div className="flex flex-col items-center">
        <RectangleStackIcon width={22} alignmentBaseline="central" />
        <div>More</div>
      </div>
    ),
    panelUI: artistAndDisclaimer,
  },
];

function App() {
  const naming = useSelector((state: RootState) => state.naming);
  const typing = useSelector((state: RootState) => state.typing);

  return (
    <div id="App" className="">
      <div className=" flex flex-col">
        <div className="flex flex-row justify-between p-3 mb-3">
          <Button size="sm">|||</Button>
          <Button size="sm">Download</Button>
        </div>
        <div className="flex flex-row justify-center">
          <div id="Card" className="w-8/12">
            <CardSizeContextProvider value={initialCardSizeContext}>
              <ClassicCardTemplate
                {...{
                  ...card,
                  title: naming.name,
                  imageSource: naming.image.data,
                  type: typing.type,
                  superType: typing.superType,
                  subtypes: typing.subtypes,
                }}
              />
            </CardSizeContextProvider>
          </div>
        </div>
      </div>
      <div id="Tabs" className="text-white">
        <Tabs tabsData={tabsData}></Tabs>
      </div>
    </div>
  );
}

export default App;
