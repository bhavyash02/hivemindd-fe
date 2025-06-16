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
import { Box, Grid, Typography, Stack } from "@mui/material";


export function Components() {
    const [inputValue, setInputValue] = useState('');

    const palettes = theme.palette?.custom;

    if (!palettes) {
        return <Typography>Custom palette not available.</Typography>;
    }

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
                        <Typography fontWeight={600} textTransform="capitalize" mb={1}>
                            {groupName}
                        </Typography>
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
                <h1>Badge</h1>
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
                </Box>
            </Grid>
        </>
    )
}

export default Components;
