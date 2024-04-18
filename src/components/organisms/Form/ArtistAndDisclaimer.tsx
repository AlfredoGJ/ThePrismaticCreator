import Textbox from "../../atoms/Textbox/Textbox";
import Field from "../../molecules/Field/Field";

interface IArtistAndDisclaimerProps {
  artist: string;
  disclaimer: string;
  onChangeArtist: (artist: string) => void;
  onChangeDisclaimer: (disclaimer: string) => void;
}

export const ArtistAndDisclaimer = ({
  artist,
  disclaimer,
  onChangeArtist,
  onChangeDisclaimer,
}: IArtistAndDisclaimerProps) => {
  return (
    <>
      {" "}
      <div className="">
        <Field label="Artist">
          <Textbox
            placeholder="Artist Of The Card "
            value={artist}
            onChange={(evt) => onChangeArtist(evt.target.value)}
          />
        </Field>
      </div>
      <div className="">
        <Field label="Disclaimer">
          <Textbox
            placeholder="Add some disclaimer e.g: '™ & © 2024 Wizards...  "
            value={disclaimer}
            onChange={(evt) => onChangeDisclaimer(evt.target.value)}
          />
        </Field>
      </div>
    </>
  );
};
