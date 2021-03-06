/*
 * Copyright (c) 2020 ARM Limited. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 * Licensed under the Apache License, Version 2.0 (the License); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
///////////
// INCLUDES
///////////

#include "mcc_common_config.h"
#include "mcc_common_button_and_led.h"

uint8_t mcc_platform_button_clicked(void)
{
    return 0;
}

uint8_t mcc_platform_init_button_and_led(void)
{
    return 1;
}

void mcc_platform_toggle_led(void)
{
}

void mcc_platform_led_off(void)
{
}

