import { useState } from 'react';
import './Components.css'
import AccordionUsage from '../components/atoms/Accordion';
import DividerText from '../components/atoms/Divider';
import SimpleBadge from '../components/atoms/Badge';
import theme from '../config/styles/theme'
import LabeledHeadingWithBadge from '../components/atoms/Headings';
import BasicTabs from '../components/atoms/Tabs';
import Buttons from '../components/atoms/Buttons';
import LoaderBox from '../components/atoms/Loader';
import { StickyAlert } from '../components/atoms/StickyAlert';
import { CustomIconButton } from '../components/atoms/CustomButtonGroup';
import CustomBreadcrumbs from '../components/atoms/Breadcrumb';
import type { BreadcrumbItem } from '../components/atoms/Breadcrumb';
import SidebarNavItem from '../components/atoms/SidebarNavigation';
import CustomPagination from '../components/atoms/PaginationSample';
import CustomAlert from '../components/atoms/InlineAlert';
import CustomInput from '../components/atoms/CustomInputs';
import DynamicModal from '../components/atoms/Modal';
import DynamicModalSmallButtons from '../components/atoms/DynamicSmallButtons';
import StatsCard from '../components/atoms/StatsCard';
import ControlledCheckbox from '../components/atoms/CheckBox';
import CustomRadioGroup from '../components/atoms/RadioButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CustomSwitch from '../components/atoms/Switch';
import { Box, Grid, Stack, Button } from "@mui/material";


export function Components() {
    const [inputValue, setInputValue] = useState('');
    const [openOne, setOpenOne] = useState(false);
    const [open, setOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedGender, setSelectedGender] = useState('female');
    const [notifications, setNotifications] = useState(false)

    const palettes = theme.palette?.custom;

    const tabs = [
        { label: 'Inbox', count: 99, content: <div>Your inbox messages</div> },
        { label: 'Drafts', count: 2, content: <div>Saved drafts</div> },
        { label: 'Sent', count: 12, content: <div>Sent messages</div> },
    ];

    const states: ('default' | 'hover' | 'pressed' | 'active' | 'disabled')[] = [
        'default',
        'hover',
        'pressed',
        'active',
        'disabled',
    ];

    const items: BreadcrumbItem[] = [
        { label: 'Home', href: '#', state: 'default' },
        { label: 'Section', href: '#', state: 'active' },
        { label: 'Subsection', href: '#', state: 'hover' },
        { label: 'Final', state: 'disabled' },
    ];

    return (
        <>
            <Grid container spacing={2}>
                {Object.entries(palettes).map(([groupName, shades]) => (
                    <Grid key={groupName}>
                        <Grid container spacing={1}>
                            {Object.entries(shades).map(([shade, hex]) => (
                                <Grid key={shade}>
                                    <Box
                                        sx={{
                                            backgroundColor: hex,
                                            height: 70,
                                            width: 100,
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 10,
                                            color: "#000",
                                        }}
                                    />
                                    {hex}
                                </Grid>
                                
                            ))}
                        </Grid>
                    </Grid>
                ))}
                <h1>Accordion</h1>
                <AccordionUsage />
                <h2>Badge</h2>
                <SimpleBadge />
                <h2>Divider</h2>
                <DividerText />
                <h2>Reusable Tabs Example</h2>
                <BasicTabs tabs={tabs} />
                <Box>
                    <h2>Headings</h2>
                    <LabeledHeadingWithBadge
                        heading="Hivemind"
                    />
                    <Box>
                        <Buttons />
                    </Box>
                    <Box>
                        <h2>Loader</h2>
                        <LoaderBox showSmall showMedium showLarge showXl />
                    </Box>
                    <Box>
                        <h2>Sticky Alert</h2>
                        <StickyAlert
                            alignment="left"
                            message="This is a center-aligned alert."
                            buttons={['Label', 'Label']}
                            color={theme.palette.primary.main}
                        />
                    </Box>
                    <Stack spacing={5} sx={{ marginTop: 5 }}>
                        <h2>Button Group</h2>
                        {states.map((state, rowIndex) => (
                            <Stack direction="row" spacing={2} key={rowIndex}>
                                <CustomIconButton label="Label" state={state} />
                                <CustomIconButton label="Label" state={state} />
                                <CustomIconButton label="Label" state={state} />
                            </Stack>
                        ))}
                    </Stack>
                    <Stack spacing={5} sx={{ marginTop: 5 }}>
                        <h2>Bread Crumbs</h2>
                        <CustomBreadcrumbs items={items} />
                    </Stack>
                    <Stack>
                        <h2>Sidebar Navigation</h2>
                        <SidebarNavItem label="Label" count={0} color={theme.palette.primary.main} />
                    </Stack>
                    <Stack spacing={5} sx={{ marginTop: 5 }}>
                        <h2>Pagination</h2>
                        <CustomPagination count={5} disabledPages={[5]} />
                    </Stack>
                    <Stack spacing={5} sx={{ marginTop: 5 }}>
                        <h2>Inline Alert</h2>
                        <CustomAlert
                            title="Alert line which displays the main function or reason of the alert."
                            description="Become a legendary UX/UI designer through real world and practical courses."
                            actions={['Action', 'Action']}
                            backgroundColor={theme.palette.custom.primaryBlue[100]}
                            borderColor={theme.palette.primary.main}
                            iconColor={theme.palette.custom.primaryBlue[200]}
                            titleColor="var(--Primary-Blue-700, #0903AE)"
                            textColor="var(--Primary-Blue-700, #0903AE)"
                            onClose={() => console.log('Alert closed')}
                        />
                    </Stack>
                    <Stack spacing={5} sx={{ marginTop: 5 }}>
                        <h2>Custom Input with Add-Ons</h2>
                        <CustomInput
                            label="Card Number"
                            placeholder="Enter"
                            helperText="Please enter a valid card number"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            variant="box"// box or line
                        />
                    </Stack>
                    <Stack spacing={5} sx={{ marginTop: 5 }}>
                        <h2>Modal</h2>
                        <Button
                            variant="contained"
                            onClick={() => setOpenOne(true)}
                            sx={{
                                bgcolor: theme.palette.custom.primaryBlue[500],
                                width: "400px",
                            }}
                        >
                            Open Modal with Primary Bottom with Full Size Button
                        </Button>
                        {/* Modal 1: Primary button below */}
                        <DynamicModal
                            open={openOne}
                            onClose={() => setOpenOne(false)}
                            avatarIcon={
                                <Box component="span" sx={{ fontSize: 28 }}>
                                    ▣
                                </Box>
                            }
                            title="A short modal heading"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore."
                            buttons={[
                                {
                                    label: "Action",
                                    variant: "outlined",
                                    onClick: () => alert("Outlined clicked"),
                                    startIcon: <HelpOutlineIcon />,
                                    endIcon: <HelpOutlineIcon />,
                                },
                                {
                                    label: "Action",
                                    variant: "contained",
                                    onClick: () => alert("Contained clicked"),
                                    startIcon: <HelpOutlineIcon />,
                                    endIcon: <HelpOutlineIcon />,
                                },
                            ]}
                        />

                        {/* Modal with Small Buttons */}
                        <Button
                            variant="contained"
                            onClick={() => setOpen(true)}
                            sx={{
                                bgcolor: theme.palette.custom.primaryBlue[500],
                                width: "200px",
                            }}
                        >
                            Open Modal
                        </Button>

                        <DynamicModalSmallButtons
                            open={open}
                            onClose={() => setOpen(false)}
                            icon={
                                <Box component="span" sx={{ fontSize: 28 }}>
                                    ▣
                                </Box>
                            }
                            title="A short modal heading"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore."
                            reverseButtons={false} // set to true if you want primary on top
                            buttons={[
                                {
                                    label: "Action",
                                    variant: "outlined",
                                    startIcon: <HelpOutlineIcon />,
                                    endIcon: <HelpOutlineIcon />,
                                    onClick: () => alert("Outlined clicked"),
                                },
                                {
                                    label: "Action",
                                    variant: "contained",
                                    color: "primary",
                                    startIcon: <HelpOutlineIcon />,
                                    endIcon: <HelpOutlineIcon />,
                                    onClick: () => alert("Contained clicked"),
                                },
                            ]}
                        />
                    </Stack>

                    {/* Stats Card */}
                    <Stack spacing={5} sx={{ marginTop: 5 }}>
                        <h2>Custom Input with Add-Ons</h2>
                        <Stack spacing={3} sx={{ p: 4 }}>
                            <StatsCard
                                icon={
                                    <Box component="span" sx={{ fontSize: 28 }}>
                                        ▣
                                    </Box>
                                }
                                overline="Overline"
                                label="Label"
                                description="Description"
                                percentage="00%"
                            />
                            <StatsCard
                                icon={
                                    <Box component="span" sx={{ fontSize: 28 }}>
                                        ▣
                                    </Box>
                                }
                                overline="Overline"
                                label="Label"
                                description="Description"
                                percentage="00%"
                            />
                        </Stack>
                    </Stack>

                    <Stack spacing={5} sx={{ marginTop: 5 }}>
                        <h2>Custom Check Box</h2>
                        <ControlledCheckbox
                            label="Accept Terms"
                            checked={isChecked}
                            onChange={setIsChecked}
                        />
                    </Stack>

                    <Stack spacing={5}>
                        <h2>Radio Group</h2>
                        <CustomRadioGroup
                            label="Gender"
                            name="gender"
                            value={selectedGender}
                            onChange={setSelectedGender}
                            options={[
                                { value: 'female', label: 'Female' },
                                { value: 'male', label: 'Male' },
                                { value: 'other', label: 'Other' },
                            ]}
                        />
                    </Stack>

                    <Stack spacing={5}>
                        <h2>Switch</h2>
                        <CustomSwitch
                            label="Enable Notifications"
                            checked={notifications}
                            onChange={setNotifications}
                        />
                    </Stack>
                </Box>
            </Grid>
        </>
    )
}

export default Components;
