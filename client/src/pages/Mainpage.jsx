import React from 'react';
import { Navigate } from 'react-router';
import Auth from '../utils/auth';
import defaultpic from '../assets/images/default.png';
import { Flex, Text, Button, Checkbox, Select } from '@radix-ui/themes';
import { MdPets } from 'react-icons/md';
export default function Mainpage() {
  if (!Auth.loggedIn()) return <Navigate to="/" />;
  return (
    <section className=" h-[90vh] grid grid-cols-1 md:grid-cols-8 ">
      <div className=" md:col-span-6 flex items-center justify-center p-12 ">
        <div className=" p-3 gap-5 flex w-[100%] max-h-[60vh] items-center overflow-auto max-[420px]:flex-col max-[420px]:w-[800px] max-[420px]:w-[600px]">
          <div className="m-3 flex-shrink-0 w-[40vh] h-[50vh] bg-blue-950"></div>
          <div className="m-3 flex-shrink-0 w-[40vh] h-[50vh] bg-blue-950"></div>
          <div className="m-3 flex-shrink-0 w-[40vh] h-[50vh] bg-blue-950"></div>
          <div className="m-3 flex-shrink-0 w-[40vh] h-[50vh] bg-blue-950"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start  md:col-span-2 ">
        <div className="m-5">
          <img className="rounded-full w-60" src={defaultpic} />
        </div>
        <div className="m-5">
          <Flex className="gap-6">
            {' '}
            <Select.Root>
              <Select.Trigger
                placeholder="Municipio"
                color="cyan"
                variant="soft"
                radius="large"
              />
              <Select.Content color="cyan" position="popper">
                <Select.Item value="Tlalpan">Tlalpan</Select.Item>
                <Select.Item value="orange">Coyoacán</Select.Item>
              </Select.Content>
            </Select.Root>
            <Select.Root>
              <Select.Trigger
                placeholder="Tipo"
                color="cyan"
                variant="soft"
                radius="large"
              />
              <Select.Content color="cyan" position="popper">
                <Select.Item value="Tlalpan">Departamento</Select.Item>
                <Select.Item value="orange">Casa</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </div>
        <div className="m-5">
          <Text as="label" size="3">
            <Flex className="items-center" gap="2">
              <Checkbox size="2" color="cyan" defaultChecked /> Pet friendly
              <MdPets />
            </Flex>
          </Text>
        </div>
      </div>
    </section>
  );
}
