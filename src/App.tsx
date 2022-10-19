import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { TextInput } from "./components/Textinput/Textinput";
import { Envelope, Lock } from "phosphor-react";

import { Checkbox } from "./components/Checkbox/Checkbox";
import { Button } from "./components/Button/Button";
import { Logo } from "./components/Logo/Logo";

import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 ">
      <div className="flex flex-col w-[400px] h-[605px]">
        <header className="flex items-center flex-col">
          <Logo />
            <Heading size="2xl" className="mt-4  "> Ignite lab</Heading>
            <Text size="md" color="gray-400" className="mt-1">
              Faça login e comece a usar!
            </Text>
        
        </header>
        <form>
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
        </form>
        <footer>
          <Button type="submit" className="mt-4">Entrar na plataforma</Button>
          <div className="flex  items-center flex-col gap-4 mt-8">
            <Text size="xs" color="gray-400">
            <a href="#" className="underline transition-colors hover:text-gray-200">  Esqueceu sua senha?</a>
            </Text>
            <Text size="xs" color="gray-400" >
             <a href="#" className="underline transition-colors hover:text-gray-200"> Não possui conta? Crie uma agora!</a>
            </Text>
          </div>
        </footer>
      </div>
    </div>
  );
}
