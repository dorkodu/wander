import { useTranslation } from "react-i18next";
import { useUserStore } from "../stores/userStore";
import Button from '@mui/material/Button';

function Welcome() {
  const { t } = useTranslation();

  const authorized = useUserStore(state => state.authorized);

  return (
    <>
      <h3>{t("welcome")}</h3>
      {authorized &&
        <Button variant="contained">you are logged in</Button>
      }
      {!authorized &&
        <Button variant="contained">you are not logged in</Button>
      }
    </>
  )
}

export default Welcome