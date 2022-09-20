import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {
  MultiSelect,
  Select,
  RangeSlider,
  Container,
  Group,
  Tooltip,
  Menu,
  Chip,
  createStyles,
} from "@mantine/core";

// importing global constant variales from ChartData
import {
  vehicleTypesInfo,
  powertrainsInfo,
  scenarioInfo,
  marketsInfo,
  marks,
} from "../components/Charts/ChartData";
import ChartGrid from "../components/ChartGrid";

export default function Dashboard() {
  // Charts filters
  const [scenario, setScenario] = useState("Reference");

  const [markets, setMarkets] = useState(marketsInfo);
  const [vehicleTypes, setVehicleTypes] = useState(vehicleTypesInfo);
  const [powertrains, setPowertrains] = useState(powertrainsInfo);

  const [[minYear, maxYear], setYear] = useState([2020, 2050]);

  // Multiselects disable
  const [isTypeDisabled, setIsTypeDisabled] = useState(false);
  const [isPowertrainDisabled, setIsPowertrainDisabled] = useState(false);

  const [opened, setOpened] = useState(false);
  const [charts, setCharts] = useState([
    "sales",
    "marketShare",
    "stocks",
    "subsidies",
    "energy",
    "emissions",
  ]);

  const useStyles = createStyles((theme, _params, getRef) => ({
    label: {
      "&[data-checked]": {
        "&, &:hover": {
          backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
          color: theme.white,
        },

        [`& .${getRef("iconWrapper")}`]: {
          color: theme.white,
        },
      },
    },

    iconWrapper: {
      ref: getRef("iconWrapper"),
    },
  }));

  const { classes } = useStyles();

  // reset filter states to default state, all filters applied
  function resetStates() {
    setScenario("Reference");

    setMarkets(marketsInfo);
    setVehicleTypes(vehicleTypesInfo);
    setPowertrains(powertrainsInfo);

    setYear([2020, 2050]);

    // multiselect disable
    setIsTypeDisabled(false);
    setIsPowertrainDisabled(false);
    setCharts([
      "sales",
      "marketShare",
      "stocks",
      "subsidies",
      "energy",
      "emissions",
    ]);
  }

  return (
    <div>
      <Group position="center" spacing="md" align="center">
        {/* <Select
          label="Select scenario"
          value={scenario}
          data={scenarioInfo}
          onChange={() => setScenario}
          searchable
          styles={{
            item: { color: "rgba(54, 162, 235, 1)" },
            // selected: { color: "rgba(54, 162, 235, 1)" },
            input: { color: "rgba(54, 162, 235, 1)" },
            label: { color: "rgba(54, 162, 235, 1)" },
          }}
        /> */}
        <MultiSelect
          value={markets}
          onChange={(e) => {
            // update market filter state
            setMarkets(e);

            // if no type is selected
            if (e.length == 0) {
              //disable the vehicle type and powertrain multiselects
              setIsTypeDisabled(true);
              setIsPowertrainDisabled(true);

              // and clear vehicle types and powertrain states
              setVehicleTypes([]);
              setPowertrains([]);
            } else {
              // otherwise, enable the vehicle type multiselect
              setIsTypeDisabled(false);
            }
          }}
          label="Select markets"
          placeholder="Select markets"
          data={marketsInfo}
          clearable
          clearButtonLabel="Clear selection"
          className="p-2 "
          styles={{ label: { color: "rgba(54, 162, 235, 1)" } }}
        />
        <MultiSelect
          value={vehicleTypes}
          onChange={(e) => {
            // update Vehicle Types filter state
            setVehicleTypes(e);

            // if no type is selected
            if (e.length == 0) {
              //disable powertrain multiselect
              setIsPowertrainDisabled(true);
              // and clear the powertrain state
              setPowertrains([]);
            } else {
              // otherwise, enable the powertrain multiselect
              setIsPowertrainDisabled(false);
            }
          }}
          label="Select vehicles"
          placeholder="Select vehicles"
          data={vehicleTypesInfo}
          clearable
          clearButtonLabel="Clear selection"
          disabled={isTypeDisabled}
          className="p-2 "
          styles={{ label: { color: "rgba(54, 162, 235, 1)" } }}
        />
        <MultiSelect
          value={powertrains}
          onChange={setPowertrains}
          label="Select powertrains"
          placeholder="Select powertrains"
          data={powertrainsInfo}
          clearable
          clearButtonLabel="Clear selection"
          disabled={isPowertrainDisabled}
          className="p-2 "
          styles={{ label: { color: "rgba(54, 162, 235, 1)" } }}
        />
        <Tooltip
          label="Reset variables to default state"
          withArrow
          position="bottom"
          transition="fade"
          openDelay={500}
        >
          <Button
            variant="contained"
            onClick={resetStates}
            sx={{
              mt: "1.75rem",
            }}
            endIcon={<RestartAltIcon />}
          >
            Reset
          </Button>
        </Tooltip>
        <Menu
          shadow="md"
          width={305}
          trigger="hover"
          closeOnClickOutside
          withArrow
          opened={opened}
        >
          <Menu.Target>
            <IconButton onClick={() => setOpened((o) => !o)} color="info">
              <InfoOutlinedIcon
                sx={{
                  mt: "1.75rem",
                }}
              />
            </IconButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Acronyms</Menu.Label>
            <Menu.Item>
              <strong>ICEV: </strong>Internal Combustion Engine Vehicle
            </Menu.Item>
            <Menu.Item>
              <strong>BEV: </strong>Battery Electric Vehicle
            </Menu.Item>
            <Menu.Item>
              <strong>FCEV: </strong>Fuel Cell Electric Vehicle
            </Menu.Item>
            <Menu.Item>
              <strong>HEV: </strong>Hybrid Electric Vehicle
            </Menu.Item>
            <Menu.Item>
              <strong>PHEV: </strong>Plug-in Hybrid Electric Vehicle
            </Menu.Item>
            <Menu.Item>
              <strong>H2ICEV: </strong>H<sub>2</sub> ICEV
            </Menu.Item>
            <Menu.Item>
              <strong>SUV: </strong>Sport Utility Vehicle
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
      <div>
        <Chip.Group
          position="center"
          multiple
          value={charts}
          onChange={setCharts}
          my={15}
        >
          <Chip classNames={classes} value="sales">
            Sales
          </Chip>
          <Chip classNames={classes} value="marketShare">
            Market Share
          </Chip>
          <Chip classNames={classes} value="stocks">
            Stocks
          </Chip>
          <Chip classNames={classes} value="subsidies">
            Subsidies
          </Chip>
          <Chip classNames={classes} value="energy">
            Energy
          </Chip>
          <Chip classNames={classes} value="emissions">
            Emissions
          </Chip>
        </Chip.Group>
      </div>
      <Container px="xs" py="xs" fluid className="md:w-1/2">
        <RangeSlider
          min={2020}
          max={2050}
          defaultValue={[minYear, maxYear]}
          marks={marks}
          minRange={2}
          onChangeEnd={(e) => {
            // set min and max years
            setYear([e[0], e[1]]);
          }}
          labelAlwaysOn
          label={(value) => `Year: ${value}`}
          className="p-6"
        />
      </Container>
      <ChartGrid
        markets={markets}
        vehicleTypes={vehicleTypes}
        powertrains={powertrains}
        minYear={minYear}
        maxYear={maxYear}
        charts={charts}
      />
    </div>
  );
}
