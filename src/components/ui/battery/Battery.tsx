import { AccumType } from "@/types/AccumType";
import NoBattery from "./NoBattery";
import BatteryNavigation from "./BatteryNavigation";
import BatteryMainContent from "./BatteryMainContent";
import BatteryDiscription from "./BatteryDiscription";

type BatteryP = {
  battery: AccumType | undefined;
};

export default function Battery(props: BatteryP) {
  return (
    <>
      {!props.battery ? (
        <NoBattery />
      ) : (
        <section className="max-w-400 mx-auto px-4">
          <div className="mb-6">
            <BatteryNavigation name={props.battery.name} />
            <BatteryMainContent battery={props.battery} />
            <BatteryDiscription battery={props.battery} />
          </div>
        </section>
      )}
    </>
  );
}
