import { Container, Paper, Title } from "@mantine/core";
import Sidebar from "../Sidebar/Sidebar";

import ConstructionIcon from "@mui/icons-material/Construction";

const Settings = () => {
  return (
    <>
      <div className="progress-container">
        <Sidebar />
        <Container>
          <Paper>
            <ConstructionIcon style={{ fontSize: 200 }} />
            {/* <Title order={2} p={20}>
              UNDER CONSTRUCTION
            </Title> */}
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Settings;
