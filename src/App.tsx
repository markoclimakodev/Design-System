import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { TextInput } from "./components/Textinput/Textinput";
import { Envelope, Lock } from "phosphor-react";

import reactIcon from "./assets/reactlogo.svg";

import "./styles/global.css";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Button } from "./components/Button/Button";

export function App() {
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col w-[400px] h-[605px]">
        <div className="flex items-center flex-col">
          <img src={reactIcon} alt="" />
          <Heading size="2xl"> Ignite lab</Heading>
          <Text size="md" color="gray-400">
            {" "}
            Faça login e comece a usar!
          </Text>
        </div>
        <div className="flex  flex-col gap-3  mt-10">
          <Text size="sm" color="gray-100">
            E-mail address
          </Text>
          <TextInput.Root>
            <TextInput.InputIcon>
              <Envelope />
            </TextInput.InputIcon>
            <TextInput.Input placeholder="Type your e-mail address" />
          </TextInput.Root>
        </div>
        <div className="flex  flex-col gap-3 mt-4">
          <Text size="sm" color="gray-100">
            Password
          </Text>
          <TextInput.Root>
            <TextInput.InputIcon>
              <Lock />
            </TextInput.InputIcon>
            <TextInput.Input placeholder="Type your password" />
          </TextInput.Root>
        </div>
        <div className="mt-4 mb-8 flex items-center gap-2">
          <Checkbox />
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </div>

        <Button>Entrar na plataforma</Button>
        <div className="flex  items-center flex-col gap-4 mt-8">
          <Text size="xs" color="gray-400">Esqueceu sua senha?</Text>
          <Text size="xs" color="gray-400">Não possui conta? crie uma agora!</Text>

        </div>
      </div>
    </div>
  );
}
